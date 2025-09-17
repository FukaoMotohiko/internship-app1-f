import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type Value = Date | [Date, Date] | null;
interface ShiftFormData {
  title: string;
  message: string;
  dates: string;
}

const CreateForm: React.FC = () => {
  const navigate = useNavigate();
  const localStorageKey = 'shiftFormData';

  const [title, setTitle] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [dates, setDates] = useState<string>('');

  const [calendarDate, setCalendarDate] = useState<Value>(new Date());

  useEffect(() => {
    const savedDataString = localStorage.getItem(localStorageKey);
    if (savedDataString) {
      const savedData: ShiftFormData = JSON.parse(savedDataString);
      setTitle(savedData.title);
      setMessage(savedData.message);
      setDates(savedData.dates);
    }
  }, []);

  const handleCalendarChange = (newDate: Value) => {
    setCalendarDate(newDate);
    if (newDate) {
        const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土'][newDate.getDay()];
        const formattedDate = `${newDate.getMonth() + 1}/${newDate.getDate()}(${dayOfWeek}) `;
        setDates(prevDates => prevDates ? `${prevDates}\n${formattedDate}` : formattedDate);
        }
    };
  const handleCreateAndNavigate = () => {
    const formData: ShiftFormData = { title, message, dates };
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
    navigate('/adjustmentHeader');
  }
  return (
    <div className='p-8 bg-gray-100 min-h-screen'>
        <div className='flex items-center text-3xl font-bold text-gray-800 mb-8'>
            <span className='text-4xl mr-2'>🏴</span>
            <h1>超簡単！シフトの出欠表</h1>
        </div>
        <div className='flex  flex-row space-y-0 space-x-8 mb-8'>
            <div className="flex-1 p-6 bg-white rounded-lg shadow-md border-t-4 border-red-500">
                <h2 className="text-xl font-bold text-gray-800 mb-4">STEP1 カンタン出欠表</h2>
                <p className="text-sm text-gray-600 mb-4">シフトのカンタン出欠表！</p>
                <div className="mb-4">
                    <input type="text" className="w-full border border-gray-300 rounded-md p-2" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <p className="text-sm font-bold text-gray-800 mb-2">｜メッセージ(任意)</p>
                <p className="text-sm text-gray-600 mb-2">例：シフト提出は月末までにお願いします！</p>
                <textarea className="w-full border border-gray-300 rounded-md p-2 h-24" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
        
            <div className="flex-1 p-6 bg-white rounded-lg shadow-md border-t-4 border-red-500">
                <h2 className="text-xl font-bold text-gray-800 mb-4">STEP2 日程</h2>
                <div className="mb-4 flex justify-center">
                    <Calendar onChange={handleCalendarChange} value={calendarDate} locale="ja-JP" className="border-none"/>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                    ※シフト表で出欠をとりたい日程を決定してください。<br />
                    複数日程指定する場合は、改行してください。
                </p>
                <p className="text-sm font-bold text-gray-800 mb-2">例：</p>
                <ul className="text-sm text-gray-600 mb-4 list-disc list-inside">
                    <li>12/19(金)19:00〜</li>
                    <li>12/20(土)お昼から〜</li>
                </ul>
                <textarea className="w-full border border-gray-300 rounded-md p-2 h-36" value={dates} onChange={(e) => setDates(e.target.value)}></textarea>
            </div>
        </div>
        <div className="text-center">
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-full shadow-lg text-lg" onClick={handleCreateAndNavigate}>
          <span className="text-2xl mr-2">🏴</span>
          出欠表をつくる
        </button>
        </div>
    </div>
    
  )
}

export default CreateForm