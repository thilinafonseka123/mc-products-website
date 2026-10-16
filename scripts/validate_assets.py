#!/usr/bin/env python3
"""Optional offline asset and QR sanity check (requires requirements-qr.txt and cv2 for QR decode)."""
from pathlib import Path
import json
from xml.etree import ElementTree
from PIL import Image
root=Path(__file__).resolve().parent.parent
from importlib.util import find_spec
assert (root/'package.json').exists()
for slug in ['grain-drink','kollu-kenda','grain-aggala']:
    for postfix in ['.webp','-original.webp','-back.webp']:
        f=root/'public/images/products'/f'{slug}{postfix}'
        assert f.exists(),f
        with Image.open(f) as im: assert im.width>250
    for ext in ['.png','.svg','-print-label.png']:
        f=root/'public/qr'/f'{slug}{ext}'
        assert f.exists(),f
for f in (root/'public/illustrations').glob('*.svg'):
    ElementTree.parse(f)
meta=json.loads((root/'public/qr/qr-manifest.json').read_text(encoding='utf-8'))
assert len(set(meta['codes'].values()))==3
print('PASS: 3 products, images, QR files, artwork SVG, unique QR targets')
if find_spec('cv2'):
    import cv2
    for slug,url in meta['codes'].items():
        image=cv2.imread(str(root/'public/qr'/f'{slug}.png'))
        decoded,_,_=cv2.QRCodeDetector().detectAndDecode(image)
        assert decoded==url,(slug,decoded,url)
    print('PASS: all QR code images decode to their intended URLs')
if meta['sample_only']:
    print('WARNING: QR code URLs are sample-only and intentionally not live')
