import os

files: list = os.listdir("3dprinting")
result: list = []

PREPEND: str = "images/projects/3dprinting/"

for file in files:
    full_thing: str = f"![]({PREPEND + file})"
    print(full_thing)
