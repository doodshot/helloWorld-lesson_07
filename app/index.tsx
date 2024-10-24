import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { ButtonAdd, ButtonComponent } from '@/components/atoms/button/button.atom';
import { useMemo, useState } from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import { ToDo, TODOS } from '@/api/data.mock';
import { TodoComponenet } from '@/components/molecules/cardComponent/cardComponent.molecule';
import { styles } from './view.styles';

const renderItem: ListRenderItem<ToDo> = ({item}) => {
  return (
   <TodoComponenet 
   id={item.id} 
   title={item.title} 
   descr={item.descr}>
   </TodoComponenet>
  )
}
export default function Index() {
  const [titleTodo, setTitleTodo] = useState('');
  const [todos, setTodos] = useState<ToDo[]>([]);

  const addTask = () => {
  }
 
  return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>
          To Do List :)
        </Text>
        <FlatList data={todos}
                  renderItem={renderItem}
                  />
                  <View>
                    <TextInput                
                      style={styles.input}
                      placeholder="Inserisci il titolo della nuova nota"
                      value={titleTodo}
                      onChangeText={setTitleTodo}
                    />
                    <ButtonAdd title={"Aggiungi una nuova nota!"} onPress={addTask}/>
                  </View>
      </View>    
  );
}
