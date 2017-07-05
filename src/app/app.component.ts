import {
    Component,
    Directive,
    ElementRef,
    HostBinding,
    HostListener,
    Input,
    TemplateRef,
    ViewContainerRef
} from '@angular/core';


@Directive({
  selector:'[three]'
})

export class ThreeDirective{
@Input() set threeFrom({one,two,three}){
  this.view.createEmbeddedView(this.template,{
    $implicit:one  
  })
  this.view.createEmbeddedView(this.template,{
    $implicit:two  
  })
  this.view.createEmbeddedView(this.template,{
    $implicit:three  
  })

}
constructor(
  el:ElementRef,
  private view: ViewContainerRef,
  private template: TemplateRef<any>
){console.log(el.nativeElement)}
} 



@Directive({
  selector:'[first]'
})

export  class FirstDirective{
  @Input() first
  @HostBinding() get innerText (){
    return this.first
  }

  @HostListener('click',['$event']) onClick($event){
    this.first = 'clicked'
  }
}

@Component({
  selector:'basic' ,
   template:`<div>{{message}}</div>`

})

export class BasicComponent{
  @Input() message
}



@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  //Example for view in directives
  //   template: `
  // <template #foo let-message="message">
  // <h1>{{message}}</h1>
  // </template>
//other example for views in directives 
template:`
<h1 *three ="let message from messages">{{message}}</h1>
`


  // <div [ngTemplateOutlet]="foo" [ngOutletContext]="one"></div>
  // <div [ngTemplateOutlet]="foo" [ngOutletContext]="two"></div>
   //Common template
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  one= {message:'Hello one'}
  two= {message:'Hello two'}

  messages={
    one:'one is awesome',
    two:'two is better',
    three:'three is best!'
  }
}



