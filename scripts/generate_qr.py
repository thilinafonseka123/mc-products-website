#!/usr/bin/env python3
"""Generate one unique QR for each product path, as PNG & SVG.

Run after publishing your website:
  python -m pip install -r scripts/requirements-qr.txt
  python scripts/generate_qr.py --base-url https://YOUR-REAL-DOMAIN.COM

QR files are written to public/qr and optionally copied to --output.
"""
import argparse
import json
import re
from pathlib import Path
import qrcode
from qrcode.image.svg import SvgPathImage
from PIL import Image, ImageDraw, ImageFont

PRODUCTS = [
    ('grain-drink', 'Grain Drink', '#805034'),
    ('kollu-kenda', 'Kollu Kenda', '#396a4c'),
    ('grain-aggala', 'Grain Aggala Mix', '#bc6e45'),
]
ROOT = Path(__file__).resolve().parent.parent

def rgb(hex_code): return tuple(int(hex_code[i:i+2],16) for i in (1,3,5))

def render(base_url, output_dir):
    output_dir.mkdir(parents=True, exist_ok=True)
    sample = bool(re.search(r'\.example(?:/|$)|localhost|your-real-domain',base_url,re.I))
    meta = {'base_url':base_url,'sample_only':sample,'codes':{}}
    for slug, title, tint in PRODUCTS:
        url = base_url.rstrip('/') + '/products/' + slug + '/'
        qr = qrcode.QRCode(version=None,error_correction=qrcode.constants.ERROR_CORRECT_H,box_size=14,border=4)
        qr.add_data(url);qr.make(fit=True)
        qr.make_image(fill_color=rgb(tint),back_color=(255,255,255)).convert('RGB').save(output_dir/(slug+'.png'))
        with (output_dir/(slug+'.svg')).open('wb') as out:
            qr.make_image(image_factory=SvgPathImage,fill_color=tint,back_color='#ffffff').save(out)
        # Separate premium printable QR sticker, sized 900x1100px at high resolution.
        canvas=Image.new('RGB',(900,1100),'#f9f6ed');d=ImageDraw.Draw(canvas)
        d.rounded_rectangle((28,28,872,1072),radius=44,outline=rgb(tint),width=7)
        try:
            font_big=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',43)
            font_mid=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',27)
            font_small=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',23)
        except OSError: font_big=font_mid=font_small=ImageFont.load_default()
        d.text((78,81),'MC PRODUCTS',font=font_big,fill=rgb(tint))
        d.text((81,145),'HOMEMADE  /  SRI LANKA',font=font_small,fill='#6f766d')
        d.line((80,205,820,205),fill='#c5c6b6',width=3)
        code=Image.open(output_dir/(slug+'.png')).convert('RGB');code.thumbnail((680,680),Image.Resampling.NEAREST)
        canvas.paste(code,((900-code.width)//2,238))
        d.text((82,920),title.upper(),font=font_mid,fill=rgb(tint))
        d.text((82,974),'SCAN  /  PREPARE  /  ORDER',font=font_small,fill='#4f6555')
        if sample:
            d.rounded_rectangle((60,1025,840,1060),radius=12,fill='#fee7d8')
            d.text((108,1030),'SAMPLE LINK - REGENERATE AFTER DEPLOYMENT',font=font_small,fill='#9e4b2d')
        canvas.save(output_dir/(slug+'-print-label.png'),optimize=True)
        meta['codes'][slug]=url
        print(f'{slug}: {url}')
    (output_dir/'qr-manifest.json').write_text(json.dumps(meta,ensure_ascii=False,indent=2),encoding='utf-8')
    print('SAMPLE ONLY: QR codes will NOT open your website until real domain is set.' if sample else 'LIVE DOMAIN QR CODES GENERATED. Confirm domain works before printing.')

if __name__=='__main__':
    parser=argparse.ArgumentParser(description='MC Products QR code generator')
    parser.add_argument('--base-url',default='https://your-real-domain.example',help='Your deployed HTTPS website URL')
    parser.add_argument('--output',default=str(ROOT/'public'/'qr'),help='Output folder')
    args=parser.parse_args()
    if not args.base_url.startswith(('https://','http://')): parser.error('The base URL must start with https:// or http://')
    render(args.base_url,Path(args.output))
