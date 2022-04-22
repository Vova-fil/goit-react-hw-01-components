import React from 'react';
import Profile from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

import data from '../datajsons/data.json';
import user from '../datajsons/user.json';
import friends from '../datajsons/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../datajsons/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        // followers={user.stats.followers}
        // views={user.stats.views}
        // likes={user.stats.likes}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
