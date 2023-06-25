# File-manager using Node.js


#### Technical requirements:
Use 18 LTS version of Node.js
<br/>

### clone repository to your local machine using terminal command "git clone https://github.com/valiant9191/file-manager.git"

### To start cli-tool use command npm "run start --username=your_username"
<br/>
<br/>

### List of operations and their syntax:
<br/>

#### Navigation & working directory (nwd)
-- Go upper from current directory (when you are in the root folder this operation shouldn't change working directory)
<div > <b> <mark style="background-color:#808080"> up <mark></b> </div>
<br/>

-- Go to dedicated folder from current directory (path_to_directory can be relative or absolute)
<div > <b> <mark style="background-color:#808080"> cd path_to_directory<mark></b> </div>
<br/>

-- Print in console list of all files and folders in current directory. List should contain:
files and folder names (for files - with extension)
folders and files are sorted in alphabetical order ascending, but list of folders goes first
type of directory content should be marked explicitly (e.g. as a corresponding column value)
<div > <b> <mark style="background-color:#808080"> ls <mark></b> </div>
<br/>

#### Basic operations with files
Read file and print it's content in console (should be done using Readable stream):
<div > <b> <mark style="background-color:#808080">cat path_to_file <mark></b> </div>
<br/>

Create empty file in current working directory:
<div > <b> <mark style="background-color:#808080">add new_file_name <mark></b> </div>
<br/>

Rename file (content should remain unchanged):
<div > <b> <mark style="background-color:#808080">rn path_to_file new_filename <mark></b> </div>
<br/>

Copy file (should be done using Readable and Writable streams):
<div > <b> <mark style="background-color:#808080">cp path_to_file path_to_new_directory <mark></b> </div>
<br/>

Move file (same as copy but initial file is deleted, copying part should be done using Readable and Writable streams):
<div > <b> <mark style="background-color:#808080">mv path_to_file path_to_new_directory <mark></b> </div>
<br/>

Delete file:
<div > <b> <mark style="background-color:#808080">rm path_to_file <mark></b> </div>
<br/>

#### Operating system info (prints following information in console)
Get EOL (default system End-Of-Line) and print it to console
<div > <b> <mark style="background-color:#808080">os --EOL <mark></b> </div>
<br/>

Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them) and print it to console
<div > <b> <mark style="background-color:#808080">os --cpus <mark></b> </div>
<br/>

Get home directory and print it to console
<div > <b> <mark style="background-color:#808080">os --homedir <mark></b> </div>
<br/>

Get current system user name (Do not confuse with the username that is set when the application starts) and print it to console
<div > <b> <mark style="background-color:#808080">os --username <mark></b> </div>
<br/>

Get CPU architecture for which Node.js binary has compiled and print it to console
<div > <b> <mark style="background-color:#808080">os --architecture <mark></b> </div>
<br/> 

### Hash calculation
Calculate hash for file and print it into console
<div > <b> <mark style="background-color:#808080">hash path_to_file <mark></b> </div>
<br/>

### Compress and decompress operations
Compress file (using Brotli algorithm, should be done using Streams API)
<div > <b> <mark style="background-color:#808080">compress path_to_file path_to_destination <mark></b> </div>
<br/>

Decompress file (using Brotli algorithm, should be done using Streams API) 
<div > <b> <mark style="background-color:#808080">decompress path_to_file path_to_destination<mark></b> </div>
<br/>
