"use client";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

interface Event {
  id: string;
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  className?: string;
}

export default function ModernCalendar() {
  // Sample events - replace with your own data source
  const events: Event[] = [
    {
      id: "1",
      title: "Team Meeting",
      start: new Date(2024, 0, 15, 10, 0),
      end: new Date(2024, 0, 15, 11, 30),
      className: "bg-blue-500 hover:bg-blue-600",
    },
    {
      id: "2",
      title: "Product Launch",
      start: new Date(2024, 0, 20),
      end: new Date(2024, 0, 22),
      allDay: true,
      className: "bg-purple-500 hover:bg-purple-600",
    },
  ];

  return (
    <div className="mx-4 h-screen bg-white p-2 md:mx-12 md:p-4 lg:mx-24 xl:mx-48">
      <style>
        {`
          /* Modern Calendar Styles */
          .fc {
            --fc-border-color: rgb(229 231 235);
            --fc-button-bg-color: rgb(59 130 246);
            --fc-button-border-color: rgb(59 130 246);
            --fc-button-hover-bg-color: rgb(37 99 235);
            --fc-button-hover-border-color: rgb(37 99 235);
            --fc-button-active-bg-color: rgb(29 78 216);
            --fc-button-active-border-color: rgb(29 78 216);
            --fc-event-bg-color: rgb(59 130 246);
            --fc-event-border-color: rgb(59 130 246);
            --fc-today-bg-color: rgb(239 246 255);
            height: 100% !important;
          }

          /* Header Styles */
          .fc .fc-toolbar {
            @apply px-4 py-4 border-b border-gray-200;
          }

          .fc .fc-toolbar-title {
            @apply text-2xl font-semibold text-gray-800;
          }

          .fc .fc-button {
            @apply text-sm px-4 py-2 rounded-md font-medium transition-colors duration-200;
          }

          /* Calendar Grid Styles */
          .fc .fc-daygrid-day-top {
            @apply text-sm font-medium text-gray-700 p-2;
          }

          .fc .fc-daygrid-day.fc-day-today {
            @apply bg-blue-50;
          }

          /* Event Styles */
          .fc-event {
            @apply rounded-md shadow-sm border-0 px-2 py-1;
          }

          .fc-event-title {
            @apply text-sm font-medium;
          }

          /* Time Grid Styles */
          .fc .fc-timegrid-slot {
            @apply border-gray-100;
          }

          .fc .fc-timegrid-axis {
            @apply text-sm text-gray-500;
          }

          /* View Container */
          .fc-view-harness {
            @apply h-[calc(100%-4rem)];
          }

          /* Scrollbar Styles */
          .fc-scroller::-webkit-scrollbar {
            @apply w-2 h-2;
          }

          .fc-scroller::-webkit-scrollbar-track {
            @apply bg-gray-100;
          }

          .fc-scroller::-webkit-scrollbar-thumb {
            @apply bg-gray-300 rounded-full hover:bg-gray-400;
          }
        `}
      </style>

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        eventContent={(eventInfo) => (
          <div className="h-full w-full p-1">
            <div className="truncate text-sm font-medium text-white">
              {eventInfo.event.title}
            </div>
          </div>
        )}
        eventClassNames={(arg): string[] => [
          "transition-colors",
          "duration-200",
          ...(typeof arg.event.extendedProps.className === "string"
            ? [arg.event.extendedProps.className]
            : []),
          "bg-blue-500 hover:bg-blue-600",
        ]}
        dayHeaderClassNames="text-sm font-semibold text-gray-700 uppercase"
        slotLabelClassNames="text-sm text-gray-500"
      />
    </div>
  );
}
