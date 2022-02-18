import { Component, OnInit } from '@angular/core';
import {SuperadminService} from 'src/app/AdminAPI/superadmin.service';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-live-session',
  templateUrl: './live-session.component.html',
  styleUrls: ['./live-session.component.css']
})
export class LiveSessionComponent implements OnInit {
  categoryone:any[]=[];
  image_url=this.admin.imagepath
  categoryoneForm:any;
  image!:File
  constructor(public admin:SuperadminService,
              public fb:FormBuilder,
              public toastr:ToastrService
              ) {}


  ngOnInit(): void {
    this.categoryOneGetAll()
    this.categoryoneForm=this.fb.group({
        title:[""],
        image:[''],
        subtitle:[""],
        status:[""]
    })

  }

  categoryOneGetAll(){

    this.admin.categoryonedata().subscribe(res=>this.categoryone=res)

  }
  imagefile(event:any){
    this.image=<File>event.target.files[0];
  }
  onSubmit(){
    console.log(this.categoryoneForm.value)
    const formData = new FormData;
    formData.append("title",this.categoryoneForm.value.title),
    formData.append("image",this.image,this.image.name),
    formData.append('status',this.categoryoneForm.value.status)
    formData.append('subtitle',this.categoryoneForm.value.subtitle)
    console.log(formData)
    this.admin.createcategoryonedata(formData).subscribe(
      (res)=>{
        this.categoryOneGetAll();
        this.categoryoneForm.reset()
        console.log(res)
        // this.toastr.error("category one submited")

      },
      (e)=>{
        console.log(e)
        this.categoryoneForm.reset()
        // this.toastr.error("category one submited")
      }
      )

  }

  //delete subject
  
}
