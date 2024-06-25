try:
    import ltermio
    import keyboard as kb
    from ltermio import Key
except ModuleNotFoundError:
    import os
    os.system("pip install ltermio keyboard")


import sys
import os
import time
import ltermio
from ltermio import Key

ltermio.setparams(echo=False)

# SKID! stolen code (doesnt work atm)

# start, end = time.time()

"""
def time_convert(sec):
  mins = sec // 60
  sec = sec % 60
  hours = mins // 60
  mins = mins % 60
  return "{0}:{1}:{2}".format(int(hours),int(mins),sec)
"""

i = 0

print("serving commands over stdin\r\n")
print("press any key for help or q to quit\r")

while True:
    i += 1
    key = ltermio.getch()
    match key:
        case 'q':
            print("* graceful exit\r", flush=True)
            # ler = end 
            # elapse = start + end
            print(f"incrementations taken for server to run: {i}")
            os.system("pkill node")
            sys.exit(0)
        case 'h':
            print("* bot is halted | press s to start\r", flush=True)
            os.system("pkill node")
        case 's':
            print("* bot is starting\r", end='', flush=True)
            # car = start
            os.system("node . &")
        case 'c':
            print("\x1b[2J")
            print(">>> ", end='', flush=True)
        case _:
            print("commands: q - quit, h - halt, s - start, c - clear screen\r", flush=True)

ltermio.setparams()
