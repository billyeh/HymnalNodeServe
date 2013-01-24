from urllib.request import urlopen

URL_ORIGINAL = 'http://www.hymnal.net/hymn.php/'
FILE = open('sheetmusic.txt', 'a')

def download_sheet_music(song_type, songs):
    url = URL_ORIGINAL + song_type + '/'
    for song in songs:
        url += str(song)
        
        html = str(urlopen(url).read())
        html = html[html.find('class="content"'):]
        html = html[html.find('hymn-content guitar') + 34:]
        html = html[:html.find('<')]
        if html[:4] == 'http':
            print(str(song) + ' ' + html)
            FILE.write(song_type + str(song) + ' ' + html + '\n')

        url = URL_ORIGINAL + song_type + '/'
