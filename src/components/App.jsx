import React from 'react';
import FriendList from './FriendList';
import Profile from './Profile';
import Statistics from './Statistics';
import TransactionHistory from './TransactionHistory'; 
import friends from './data/friends.json';
import data from './data/data.json';
import transactions from './data/transactions.json';
import user from './data/user.json';

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
