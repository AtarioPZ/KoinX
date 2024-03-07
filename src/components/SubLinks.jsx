import { useState } from 'react';

function SubLinks() {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='Details my-3 py-3 overflow-x-auto'>
            <div className="flex justify-start space-x-4">
                <button className={`mr-4 ${activeTab === 'Overview' ? 'text-blue-500 font-bold' : 'text-gray-500'}`} onClick={() => handleTabChange('Overview')}>Overview</button>
                <button className={`mr-4 ${activeTab === 'Fundamentals' ? 'text-blue-500 font-bold' : 'text-gray-500'}`} onClick={() => handleTabChange('Fundamentals')}>Fundamentals</button>
                <button className={`mr-4 ${activeTab === 'News' ? 'text-blue-500 font-bold' : 'text-gray-500'}`} onClick={() => handleTabChange('News')}>News Insight</button>
                <button className={`mr-4 ${activeTab === 'Sentiments' ? 'text-blue-500 font-bold' : 'text-gray-500'}`} onClick={() => handleTabChange('Sentiments')}>Sentiments</button>
                <button className={`mr-4 ${activeTab === 'Team' ? 'text-blue-500 font-bold' : 'text-gray-500'}`} onClick={() => handleTabChange('Team')}>Team</button>
                <button className={`mr-4 ${activeTab === 'Technicals' ? 'text-blue-500 font-bold' : 'text-gray-500'}`} onClick={() => handleTabChange('Technicals')}>Technicals</button>
                <button className={`mr-4 ${activeTab === 'Tokenomics' ? 'text-blue-500 font-bold' : 'text-gray-500'}`} onClick={() => handleTabChange('Tokenomics')}>Tokenomics</button>
            </div>
            <div className="mt-4">
                {activeTab === 'Overview' && (
                    <div>                        
                    </div>
                )}
                {activeTab === 'Fundamentals' && (
                    <div>
                    </div>
                )}
                {activeTab === 'News' && (
                    <div>
                    </div>
                )}
                {activeTab === 'Sentiments' && (
                    <div>
                    </div>
                )}
                {activeTab === 'Team' && (
                    <div>
                    </div>
                )}
                {activeTab === 'Technicals' && (
                    <div>
                    </div>
                )}
                {activeTab === 'Tokenomics' && (
                    <div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SubLinks;
