import fs from "fs/promises";

const status = async (path) => {
    try{
    const stats = await fs.stats(path);
    console.log(stats);
    console.log(stats.isFile());
    console.log(stats.isDirectory());
}catch(error) {
    console.log("unable to check status");
 }
}
status("./dir.js")