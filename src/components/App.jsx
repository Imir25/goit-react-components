import React from 'react';
import FriendList from './FriendList';
import friends from './friends.json';
import Profile from './Profile';
import user from './user.json';
import data from './data.json';
import Statistics from './Statistics';
import TransactionHistory from './TransactionHistory'; 
import transactions from './transactions.json'; 

export const App = () => {
  return (
    <div className="app-container">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <div>
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} /> 
      </div>
    </div>
  );
};
