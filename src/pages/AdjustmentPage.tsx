import React, { useState, useEffect} from 'react';
import { Link , useParams, useNavigate} from 'react-router-dom';

interface ShiftData {
  id: string;
  title: string;
  message: string;
  dates: string;
}

const AdjustmentPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [shiftData, setShiftData] = useState<ShiftData | null>(null);

  useEffect(() => {
    if (id) {
      const savedDataString = localStorage.getItem(id);
      
      if (savedDataString) {
        setShiftData(JSON.parse(savedDataString));
      }
    }
  }, [id]);

  if (!shiftData) {
    return (
      <div>
        <header className="bg-red-500 text-white p-4">
          <h1 className="text-4xl font-bold">調整さん</h1>
        </header>
        <div className="p-8">データが見つかりません。URLが正しいか確認してください。</div>
      </div>
    );
  }

  const submissionId = "some-unique-id";
    navigate(`/Input/${submissionId}`);

  // const dateOptions = shiftData.dates.split('\n').filter(date => date.trim() !== '');

  return (
    <div>
      <header className="bg-red-500 text-white p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Link to="/" className="flex items-center space-x-4">
          <h1 className="text-4xl font-bold">
          調整さん
          </h1>
          <div className="flex flex-col text-xs mt-1">
            <p>カンタン出欠管理、日程調整ツール。</p>
            <p>効率よくスケジュールを決めましょう。</p>
          </div>
        </Link>
      </div>

    </header>
      <main className="p-4 md:p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">{shiftData.title}</h1>
        <p className="text-gray-600 mb-6">{shiftData.message}</p>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold mb-4">| 日程候補</h2>
        <table className="w-full text-center">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-400 px-2 py-2">日程</th>
              <th className="border border-gray-400 px-2 py-2">○</th>
              <th className="border border-gray-400 px-2 py-2">△</th>
              <th className="border border-gray-400 px-2 py-2">×</th>
            </tr>
          </thead>
          <tbody>
          {shiftData.dates.split("\n").map((date, index) => (
            <tr key={index} className="border-b">
              <td className="border border-gray-400 px-2 py-2">{date}</td>
              <td className="border border-gray-400 px-2 py-2">0人</td>
              <td className="border border-gray-400 px-2 py-2">0人</td>
              <td className="border border-gray-400 px-2 py-2">0人</td>
            </tr>
            ))}
            <tr>
      <td className="border border-gray-400 px-4 py-4 text-left text-gray-600" colSpan={5} >
        コメント</td>
        

            </tr>
          </tbody>
        </table>
        </div>
    </main>
    <div className="text-center">
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-full shadow-lg text-lg" onClick={submissionId}>
          <span className="text-2xl mr-2">🏴</span>
          出欠表をつくる
        </button>
        </div>
    </div>
    

  );
};

export default AdjustmentPage;
