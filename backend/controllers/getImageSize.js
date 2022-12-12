// This function uses the Url-File_Size package to return the size of an image file in kilobytes

import ufs from 'url-file-size'

async function getImageSize (file) {
  try{
    let data = await ufs(file)  // Returns a file's size in bytes
    data /= 1000  // Convert data to kilobytes
    console.log(data + " KB")
  } catch (err) {
    console.log(err)
  }
}
