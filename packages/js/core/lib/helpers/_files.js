// fileArrayOrList: File[] | FileList
// returns a FileList instance
const buildFileList = (fileArrayOrList) => {
  if (fileArrayOrList instanceof FileList) {
    return fileArrayOrList;
  }

  const dataTransfer = new DataTransfer();

  for (const file of fileArrayOrList) {
    dataTransfer.items.add(file);
  }

  return dataTransfer.files;
};

// fileArrayOrList: File[] | FileList
// returns a File[]
const buildFileArray = (fileArrayOrList) => {
  if (Array.isArray(fileArrayOrList)) {
    return fileArrayOrList;
  }

  return Array.from(fileArrayOrList);
};

const files = {
  buildFileList,
  buildFileArray,
};

export { files };
