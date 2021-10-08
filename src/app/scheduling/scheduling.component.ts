import { Component, OnInit, ViewChild } from '@angular/core';
import {   MbscCalendarEvent,
    MbscDatepickerOptions,
    MbscEventcalendarOptions,
    MbscEventcalendarView,
    MbscPopup,
    MbscPopupOptions,
    Notifications,
    setOptions} from '@mobiscroll/angular';

import { HttpClient } from '@angular/common/http';
import { CalendarEvent, CalendarView } from 'angular-calendar';

 setOptions({
  theme: 'ios',
  themeVariant: 'light',
  clickToCreate: false,
  dragToCreate: false,
  dragToMove: false,
  dragToResize: false
});

const now = new Date();

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css'],
  providers: [Notifications]
})
export class SchedulingComponent implements OnInit {

  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];

  clickedDate: Date = new Date();

  clickedColumn: number = 0; ;

    constructor(private http: HttpClient, private notify: Notifications) { }



    // myEvents: MbscCalendarEvent[] = [];
    // view = 'calendar';
    // filteredEvents: MbscCalendarEvent[] = [];
    // selected: number[] = [1];
    // calView: MbscEventcalendarView = {
    //     calendar: { labels: true }
    // };
    // currentDate: any = new Date();

    // @ViewChild('popup', { static: false })
    // popup!: MbscPopup;
    // popupEventTitle: string | undefined;
    // popupEventDescription = '';
    // popupEventAllDay = true;
    // popupEventDates: any;
    // popupEventStatus = 'busy';
    // calendarSelectedDate: any = now;
    // switchLabel: any = 'All-day';
    // tempEvent!: MbscCalendarEvent;
    // calendarOptions: MbscEventcalendarOptions = {
    //     clickToCreate: 'double',
    //     dragToCreate: true,
    //     dragToMove: true,
    //     dragToResize: true,
    //     view: {
    //         calendar: { type: 'month', labels: true }
    //     },
    //     onEventClick: (args) => {
    //         this.isEdit = true;
    //         this.tempEvent = args.event;
    //         // fill popup form with event data
    //         this.loadPopupForm(args.event);
    //         // set popup options
    //         this.popupHeaderText = 'Update Shift';
    //         this.popupButtons = this.popupEditButtons;
    //         this.popupAnchor = args.domEvent.currentTarget;
    //         // open the popup
    //         this.popup.open();
    //     },
    //     onEventCreated: (args) => {
    //         setTimeout(() => {
    //             this.isEdit = false;
    //             this.tempEvent = args.event;
    //             // fill popup form with event data
    //             this.loadPopupForm(args.event);
    //             // set popup options
    //             this.popupHeaderText = 'Create Booking Slot';
    //             this.popupButtons = this.popupAddButtons;
    //             this.popupAnchor = args.target;
    //             // open the popup
    //             this.popup.open();
    //         });
    //     },
    //     onEventDeleted: (args) => {
    //         setTimeout(() => {
    //             this.deleteEvent(args.event);
    //         });
    //     },
    //     onEventUpdated: (args) => {
    //         // here you can update the event in your storage as well, after drag & drop or resize
    //         // ...
    //     }
    // };
    // popupHeaderText!: string;
    // popupAnchor: HTMLElement | undefined;
    // popupAddButtons = ['cancel', {
    //     handler: () => {
    //         this.saveEvent();
    //     },
    //     keyCode: 'enter',
    //     text: 'Add',
    //     cssClass: 'mbsc-popup-button-primary'
    // }];
    // popupEditButtons = ['cancel', {
    //     handler: () => {
    //         this.saveEvent();
    //     },
    //     keyCode: 'enter',
    //     text: 'Save',
    //     cssClass: 'mbsc-popup-button-primary'
    // }];
    // popupButtons: any = [];
    // popupOptions: MbscPopupOptions = {
    //     display: 'bottom',
    //     contentPadding: false,
    //     fullScreen: true,
    //     onClose: () => {
    //         if (!this.isEdit) {
    //             // refresh the list, if add popup was canceled, to remove the temporary event
    //             this.myEvents = [...this.myEvents];
    //         }
    //     },
    //     responsive: {
    //         medium: {
    //             display: 'anchored',
    //             width: 400,
    //             fullScreen: false,
    //             touchUi: false
    //         }
    //     }
    // };
    // datePickerControls = ['date'];
    // datePickerResponsive: any = {
    //     medium: {
    //         controls: ['calendar'],
    //         touchUi: false
    //     }
    // };
    // datetimePickerControls = ['datetime'];
    // datetimePickerResponsive = {
    //     medium: {
    //         controls: ['calendar', 'time'],
    //         touchUi: false
    //     }
    // };
    // datePickerOptions: MbscDatepickerOptions = {
    //     select: 'range',
    //     showRangeLabels: false,
    //     touchUi: true
    // };
    // isEdit = false;
    // loadPopupForm(event: MbscCalendarEvent): void {
    //     this.popupEventTitle = event.title;
    //     this.popupEventDescription = event.description;
    //     this.popupEventDates = [event.start, event.end];
    //     this.popupEventAllDay = event.allDay || false;
    //     this.popupEventStatus = event.status || 'busy';
    // }
    // saveEvent(): void {
    //     this.tempEvent.title = this.popupEventTitle;
    //     this.tempEvent.description = this.popupEventDescription;
    //     this.tempEvent.start = this.popupEventDates[0];
    //     this.tempEvent.end = this.popupEventDates[1];
    //     this.tempEvent.allDay = this.popupEventAllDay;
    //     this.tempEvent.status = this.popupEventStatus;
    //     if (this.isEdit) {
    //         // update the event in the list
    //         this.myEvents = [...this.myEvents];
    //         // here you can update the event in your storage as well
    //         // ...
    //     } else {
    //         // add the new event to the list
    //         this.myEvents = [...this.myEvents, this.tempEvent];
    //         // here you can add the event to your storage as well
    //         // ...
    //     }
    //     // navigate the calendar
    //     this.calendarSelectedDate = this.popupEventDates[0];
    //     // close the popup
    //     this.popup.close();
    // }
    // deleteEvent(event: MbscCalendarEvent): void {
    //     this.myEvents = this.myEvents.filter(item => item.id !== event.id);
    //     this.notify.snackbar({
    //         button: {
    //             action: () => {
    //                 this.myEvents = [...this.myEvents, event];
    //             },
    //             text: 'Undo'
    //         },
    //         message: 'Shift deleted'
    //     });
    //     // here you can delete the event from your storage as well
    //     // ...
    // }

    // onDeleteClick(): void {
    //     this.deleteEvent(this.tempEvent);
    //     this.popup.close();
    // }

    ngOnInit(): void {
        // this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
        //     this.myEvents = resp;
        // });
    }

    /*filterEvents = (events: MbscCalendarEvent[], selected: number[]) => {
        const ev = [];
        for (const value of events) {
            const item = value;
            if (selected.indexOf(item.participant) > -1) {
                if (item.participant === 1) {
                    item.color = '#328e39';
                } else if (item.participant === 2) {
                    item.color = '#00aabb';
                } else if (item.participant === 3) {
                    item.color = '#ea72c0';
                }
                ev.push(item);
            }
        }
        this.filteredEvents = ev;

    }

    filter(): void {
        this.filterEvents(this.myEvents, this.selected);
        this.notify.toast({
            message: 'Showing Barry events'
        });
    }*/

    // changeView(): void {
    //     setTimeout(() => {
    //         switch (this.view) {
    //             case 'calendar':
    //                 this.calView = {
    //                     calendar: { labels: true }
    //                 };
    //                 break;
    //             case 'schedule':
    //                 this.calView = {
    //                     schedule: { type: 'week' }
    //                 };
    //                 break;
    //         }
    //     });
    // }

    // getFirstDayOfWeek(d: Date, prev: boolean): Date {
    //     const day = d.getDay();
    //     const diff = d.getDate() - day + (prev ? -7 : 7);
    //     return new Date(d.setDate(diff));
    // }

    // navigatePage(prev: boolean): void {
    //     const currentDate = this.currentDate;
    //     if (this.view === 'calendar') {
    //         const prevNextPage = new Date(currentDate.getFullYear(), currentDate.getMonth() + (prev ? -1 : 1), 1);
    //         this.currentDate = prevNextPage;
    //     } else {
    //         const prevNextSunday = this.getFirstDayOfWeek(currentDate, prev);
    //         this.currentDate = prevNextSunday;
    //     }
    // }



}
