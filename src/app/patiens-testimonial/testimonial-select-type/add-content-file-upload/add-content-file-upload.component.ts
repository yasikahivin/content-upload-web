import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../../services/file-upload.service';

@Component({
  selector: 'app-add-content-file-upload',
  templateUrl: './add-content-file-upload.component.html',
  styleUrls: ['./add-content-file-upload.component.scss']
})
export class AddContentFileUploadComponent implements OnInit {

    shortLink: string = "";
    loading: boolean = false; // Flag variable
    file: File | null = null; // Variable to store file
  
    constructor(private fileUploadService: FileUploadService) { }
  
    ngOnInit(): void {
    }
    
    onChange(event: { target: { files: (File | null)[]; }; }) {
        this.file = event.target.files[0];
    }
  
    
    onUpload() {
        this.loading = !this.loading;
        console.log(this.file);
        if(this.file!=null){
          this.fileUploadService.upload(this.file).subscribe(
            (event: any) => {
                if (typeof (event) === 'object') {
  
                    
                    this.shortLink = event.link;
  
                    this.loading = false;
                }
            }
        );
        }
        
    }
}
