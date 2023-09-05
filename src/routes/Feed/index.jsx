import { useState, useEffect } from 'react';
import styles from "./Feed.module.css";
import GroupList from '../../components/GroupList';
import ChatScreen from '../../components/ChatScreen';

function Feed() {
  const [groups, setGroups] = useState([]);
  const [newGroupName, setNewGroupName] = useState('');
  const [currentGroup, setCurrentGroup] = useState(null);

  useEffect(() => {
    const savedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    setGroups(savedGroups);
  }, []);

  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups));
  }, [groups]);

  function createGroup() {
    if (newGroupName.trim() !== '') {
      const newGroup = { name: newGroupName, members: [] };
      setGroups(prevGroups => [...prevGroups, newGroup]);
      setNewGroupName('');
    }
  }

  function handleGroupClick(groupIndex) {
    setCurrentGroup(groups[groupIndex]);
  }

  function handleBackToGroups() {
    setCurrentGroup(null);
  }

  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  }
  

  return (

    

    <div className={styles.feedContainer}>
      <h1 className={styles.feedTitle}>Feed</h1>

      {!currentGroup && (
        <div>

        <button onClick={handleClick}>sair da conta</button>

          <div className={styles.groupForm}>
            <input
              type="text"
              placeholder="Nome do grupo"
              value={newGroupName}
              onChange={e => setNewGroupName(e.target.value)}
            />
            <button onClick={createGroup}>Criar Grupo</button>
          </div>
          <GroupList groups={groups} handleGroupClick={handleGroupClick} />
        </div>
      )}

      {currentGroup && (
        <ChatScreen
          currentGroup={currentGroup}
          handleBackToGroups={handleBackToGroups}
        />
      )}
    </div>
  );
}

export default Feed;
