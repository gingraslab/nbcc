import re
from pathlib import Path

pattern = re.compile(r'<a\b[^>]*\bhref\s*=\s*(["\"])https?://[^"\'>]+\1[^>]*>', re.I)
missing = []
for path in sorted(Path('.').rglob('*.html')):
    text = path.read_text(encoding='utf-8')
    for m in pattern.finditer(text):
        tag = m.group(0)
        if 'target="_blank"' not in tag.lower() or 'rel="noopener noreferrer"' not in tag.lower():
            missing.append((path, tag))

print(f'missing {len(missing)} links')
for path, tag in missing[:50]:
    print(path, tag)
