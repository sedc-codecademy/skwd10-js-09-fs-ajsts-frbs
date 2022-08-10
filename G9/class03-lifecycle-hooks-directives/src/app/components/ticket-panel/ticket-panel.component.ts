import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Ticket } from 'src/app/interfaces/ticket';

@Component({
  selector: 'ticket-panel',
  templateUrl: './ticket-panel.component.html',
  styleUrls: ['./ticket-panel.component.scss'],
})
export class TicketPanelComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    OnDestroy,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  @Input() tickets: Ticket[];
  public ticketToDisplay: Ticket;
  @Output() emitTicketToParent: EventEmitter<Ticket> =
    new EventEmitter<Ticket>();
  public randomColor: string = '#000000';
  public peopleData: any;
  public displayPeople: boolean = false;

  /* Called in the bootstrapping phase
  This phase is when Angular creates the instances of services, pipes, components, and directives 
  in our module. Angular initializes the component and resolves 
  its dependencies and passes it to the constructor.
  */
  constructor() {
    console.log('CONSTRUCTOR CALLED');
  }

  /*
  Component Hooks:
  - constructor()
  - OnInit
  - OnChanges
  - DoCheck
  - OnDestroy

  Component's Children's Hooks:
  - AfterContentInit
  - AfterContentChecked
  - AfterViewInit
  - AfterViewChecked
  */

  // Called after a bound property changes
  // Very simply, ngOnChanges is run when the component/directive’s input bindings have changed.
  // It's also the first hook to run
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ON_CHANGES CALLED');
    console.log(changes);
  }

  /*
  Is a lifecycle hook called after Angular has initialized all data.
  Called in the change detection phase.
  is called after the component tree has been constructed, 
  and the dependencies are resolved and passed to the component/directive’s instances.
  */
  ngOnInit(): void {
    console.log('ON_INIT CALLED');
    fetch('https://swapi.dev/api/people')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        this.peopleData = data.results;
      });
  }

  /* DoCheck is a callback method that performs change detection, 
  invoked after the default change detector runs.
  This hook comes after the OnInit hook. 
  DoCheck is not run on an event like OnInit and OnChanges, 
  which are called when a change in input properties occurs or when the component/directive is 
  initialized. Instead, 
  this hook is added so the developer can add his or her custom code to perform a custom CD.
  */
  ngDoCheck(): void {
    console.log('DO_CHECKED CALLED');
  }

  /*
  OnDestroy is lifecycle hook that is called when a directive, pipe, or service is destroyed. 
  Use this for any custom cleanup that needs to occur when the instance is destroyed.
  */
  ngOnDestroy(): void {
    console.log('ON_DESTROY CALLED');
  }

  /*
  AfterContentInit is called when the content of a component/directive has initialized.
  */
  ngAfterContentInit() {
    console.log('AFTER_CONTENT_INIT CALLED');
  }

  /*
  This is hook is called after the default change detector for the 
  component/directive projected into a component via the ng-content tag has completed its check
  */
  ngAfterContentChecked(): void {
    console.log('AFTER_CONTENT_CHECKED CALLED');
  }

  /*
  This hook is called after a component’s view and its children’s views 
  have been created and fully initialized.
  This hook comes in handy when we want to reference a 
  component/directive instance in our component using ViewChild/ViewChildren.
  */
  ngAfterViewInit(): void {
    console.log('AFTER_VIEW_INIT CALLED');
  }

  /*
  This hook is called after the change detector of a component/directive’s child component 
  has been run for checks.

  Be careful not to set any variables bound to the template here. 
  If you do, you’ll receive the "Expression has changed after it was checked" error.
  */

  ngAfterViewChecked(): void {
    console.log('AFTER_VIEW_CHECKED CALLED');
  }

  onTicketFinish(ticket: Ticket) {
    this.emitTicketToParent.emit(ticket);
  }

  public generateRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    this.randomColor = `#${randomColor}`;
  }

  public displayTicket(ticketToDisplay: Ticket) {
    this.ticketToDisplay = ticketToDisplay;
  }

  public displayStarWarsPeople() {
    this.displayPeople = !this.displayPeople;
  }
}
