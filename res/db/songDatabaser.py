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
        if d[len(d) - 3: len(d)] == 'txt':
            files.append(d)
    return files
    
#############################################
#FUNCTIONS TO MOVE TEXT INTO SQLITE DATABASE#
#############################################

con = sqlite3.connect(SONG_DB)
with con:
    cur = con.cursor()
    for f in get_files('./'):
        song_text = open(f, 'r').read()
        song_num = SONG_TYPE + f[4:].replace('.txt', '')
        cur.execute("INSERT INTO songs VALUES(NULL, ?, ?);", (song_num, song_text))