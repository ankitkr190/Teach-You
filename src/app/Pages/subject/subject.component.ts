import { Component, OnInit } from '@angular/core';
import { SuperadminService } from 'src/app/AdminAPI/superadmin.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  categories:any[]=[];
  image!:File;
  subjectform:any;
  subjects:any[]=[];
  constructor(public _admin:SuperadminService ,public fb:FormBuilder) {

        this.subjectform= fb.group({
          categoryone:[""],
          name:[""],
          image:[""],
          status:[""],
          description:[""],
          which_year:[""]
        })
  }

  ngOnInit(): void {
    this.categoryOneGetAll();
    this.categorysubjects();

  }
  //all categoryone
  categoryOneGetAll(){

    this._admin.categoryonedata().subscribe(
      res=>{
        this.categories=res
        console.log(res)

      }
     )

  }

  //categoryons subject
  categorysubjects(){
    this._admin.getsubjects().subscribe(
      (res)=>{
        this.subjects=res;
        console.log(res);
      }
    )
  }



  imagefile(file:any){
    this.image=<File>file.target.files[0];
    console.log(this.image)
  }

  onSubmit(){
    const formData= new FormData();
    formData.append( "categoryone",this.subjectform.value.categoryone);
    formData.append( "name",this.subjectform.value.name,)
    formData.append( "image",this.image,this.image.name)
    formData.append( "status",this.subjectform.value.status,)
    formData.append( "description",this.subjectform.value.description)
    formData.append( "which_year",this.subjectform.value.which_year)


    // const data={
    //   "categoryone":this.subjectform.value.categoryone,
    //   "name":this.subjectform.value.name,
    //   "image":this.image,this.image.name,
    //   "status":this.subjectform.value.status,
    //   "description":this.subjectform.value.description,
    //   "which_year":this.subjectform.value.which_year

    // }
    // console.log(data)
    this._admin.createsubjects(formData).subscribe(
      (res)=>{
        console.log(res)
        this.subjectform.reset();
        this.categorysubjects();
      }
    )

  }

  //delete category
  delete(id:any){
    this._admin.deletesubjects(id).subscribe(
      (res)=>{
        console.log(res)
        this.categorysubjects();
      }
    )
  }

}
