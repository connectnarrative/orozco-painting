from fontTools.ttLib import TTFont
from fontTools import subset

for filename, output in [('NimbusSans-Regular.otf', 'sans'), ('NimbusSans-Bold.otf', 'bold'), ('NimbusSansNarrow-Bold.otf', 'display')]:
    font = TTFont(filename)
    converter = subset.Subsetter()
    converter.populate(unicodes=list(range(32, 127)) + [0x2022, 0x2019])
    converter.subset(font)
    font.flavor = 'woff'
    font.save('../' + output + '.woff')
