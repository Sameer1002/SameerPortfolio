import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import dragdrop from "../../../public/assets/icons/dragdrop.svg";



export default function PdfDropzone({ onDrop, accept,selectedFile,open,setFile,error,setError,setGlobalError}) {
    const [fileError, setFileError] = useState("");
    const [previousFile,setPreviousFile]=useState(null);
    const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
        useDropzone({
            accept:accept,
            onDrop: (acceptedFiles) => {
                setFileError("");
                setError("");
                setGlobalError("");
                const file=acceptedFiles[0];
                if(file){
                    const allowedExtensions = ['.pdf'];
                    const fileExtension=file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
                    const fileSizeLimit=1024*1024*25;
                    if(file.size>fileSizeLimit ){
                        setFileError("The uploaded file exceeds the 25MB limit. Please upload a smaller file.");
                        setFile(null);
                        return;
                    }else if(!allowedExtensions.includes(fileExtension)){
                        setFileError("Invalid file format. Only .pdf files are allowed.");
                        setFile(null);
                        return;
                    }
                    else{
                        setFileError("");
                        setFile(file);
                    }   
                }
            },
            maxFiles:1,

           
        });
    const files = acceptedFiles?.map((file) => (
        <Typography variant="h6" className="content" key={file.path}>
            {file.path}
        </Typography>
    ));

    const fileName=selectedFile?.name;

    return (
        <Box>
            <Box 
                {...getRootProps({ className: error ? "dropzone-error" : "dropzone " })}
            >
                <input className="input-zone" {...getInputProps()} data-testid="file-input" />
                <Box className="center">
                    {isDragActive ? (
                        <Box className="dropzone-content">
                            <Box>
                                <Image src={dragdrop} alt="pdf logo here" className='pdfimg' />
                            </Box>
                            <Box className='center' pt={2}>
                                <Typography variant='h4' className='gray fw5 center' gutterBottom>     Release to drop the files here </Typography>
                            </Box>

                        </Box>
                    ) : (
                        <Box className="dropzone-content">
                            <Box>
                                <Image src={dragdrop} alt="pdf logo here" className='pdfimg' />
                            </Box>

                            <Box pt={2}>
                                <Typography variant='h4' className='gray fw5' gutterBottom> Drag & drop your files here  </Typography>
                                <Typography variant='h5' className='black fw6' gutterBottom> Or </Typography>
                                <Typography variant='h4' className='l-secondary fw5' gutterBottom> Browse files </Typography>
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>

            <Box>
                {!fileError && (
                    <Typography variant="h6" className="content" key={fileName}>
                        {fileName}
                    </Typography>
                )}
                {fileError && (
                    <Typography variant="h6" className="error" style={{ color: "red", marginTop: "10px" }}>
                        {fileError}
                    </Typography>
                )}

            </Box>
        </Box>

    );
}