import { Component, OnInit , ViewContainerRef} from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {

  generatedGuid : String = null;
  clipboard : any;

  constructor(private toastr: ToastrService) {
    
   }

  ngOnInit() {
    
  }

  generate():void{
    this.generatedGuid = `${this.getHexFourTime()}${this.getHexFourTime()}-${this.getHexFourTime()}-${ this.getHexFourTime()}-${this.getHexFourTime()}-${ this.getHexFourTime()}${ this.getHexFourTime()}${ this.getHexFourTime()}`;
  }

  getHexFourTime(): String {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  onSucceed():void{
    this.toastr.success(`Has been set a clipboard as '${this.generatedGuid}'.`, 'Copied');
  }

  onFailed():void{

  }

}
