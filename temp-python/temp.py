import os
import shutil

path = "temp-python/logos"
icons_list  = os.listdir(path)

icons_names = []
for icon in icons_list:
    icon_name = icon.split(".")[0]
    icons_names.append(icon_name)

all_str = " ".join(icons_names)

print(all_str)

# for name in icons_list:
#     selected_svg = None
#     all_svgs = os.listdir(path+"/"+name)
#     for svg in all_svgs:
#         if svg.endswith("original.svg"):
#             selected_svg = svg

#     if selected_svg != None:
        
#         shutil.copy(path+"/"+name+"/" +selected_svg, "temp-python/logos")
#         os.rename("temp-python/logos/" + selected_svg , "temp-python/logos/" + name + ".svg")