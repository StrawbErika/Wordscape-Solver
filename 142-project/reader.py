def readCSV():
    file = open("words.txt", "r") 
    book = file.readlines() 
    fileList = []

    for x in range(0, len(book)):
        lineList = book[x].rstrip('\n')
        fileList.append(lineList)
    return fileList

def save_file(data, name):
    file = open(name + ".js","w") 
    num = 0
    file.write("export default ["+"\n")
    while(num != len(data)):
        file.write("'"+str(data[num]).lower()+"'"+","+"\n")
        num = num + 1        
    file.write("]")
    file.close() 

files = readCSV()
save_file(files, "files")