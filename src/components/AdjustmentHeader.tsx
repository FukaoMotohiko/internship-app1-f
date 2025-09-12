import React from 'react';

const AdjustmentHeader: React.FC = () => {
  return (
    <header className="bg-red-500 text-white p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-4xl font-bold">
          調整さん
        </h1>
        <div className="flex flex-col text-xs mt-1">
          <p>カンタン出欠管理、日程調整ツール。</p>
          <p>効率よくスケジュールを決めましょう。</p>
        </div>
      </div>
    </header>
  );
};

export default AdjustmentHeader;