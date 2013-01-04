import sqlite3
import sys
import os

#################
#CONSTANT VALUES#
#################

SONG_TYPE = os.getcwd()[::-1][:os.getcwd().find('\\')][::-1] # get current folder
SONG_DB = 'song.db'

###################
#UTILITY FUNCTIONS#
###################

def get_files(dir):
    dirList = os.listdir(dir)
    files = []
    for d in dirList:
        if d[len(d) - 3: len(d)] == 'txt' and not d == 'sheet_music.txt':
            files.append(d)
    return files
    
#############################################
#FUNCTIONS TO MOVE TEXT INTO SQLITE DATABASE#
#############################################

sheet_music = str(open('sheet_music.txt', 'r').read())
lines = sheet_music.split('\n')

dict_sheets = []
for i in lines:
    dict_sheets.append(i.split())
dict_sheets = dict(dict_sheets)

con = sqlite3.connect(SONG_DB)
with con:
    cur = con.cursor()
    for f in get_files('./'):
        song_text = open(f, 'r').read()
        song_num = SONG_TYPE.replace('\\', '') + f[4:].replace('.txt', '')

        if song_num in dict_sheets:
            cur.execute("INSERT INTO songs VALUES(NULL, ?, ?, ?);", 
                        (song_num, song_text, dict_sheets[song_num]))
        else:
            cur.execute("INSERT INTO songs VALUES(NULL, ?, ?, ?);", 
                        (song_num, song_text, ''))