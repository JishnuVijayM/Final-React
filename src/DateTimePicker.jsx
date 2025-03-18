import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { Calendar, Clock } from "lucide-react";

const DateTimePicker = ({ onChange }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleChange = (date) => {
        setSelectedDate(date);
        onChange && onChange(date);
    };

    return (
        <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Select Date & Time</label>
            <div className="relative">
                <DatePicker
                    selected={selectedDate}
                    onChange={handleChange}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="yyyy-MM-dd HH:mm"
                    className="w-full p-2 pl-10 pr-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                <Clock className="absolute right-3 top-3 h-5 w-5 text-gray-500" />
            </div>
            <p className="text-sm text-gray-600">
                Selected: {format(selectedDate, "yyyy-MM-dd HH:mm")}
            </p>
        </div>
    );
};

export default DateTimePicker;
