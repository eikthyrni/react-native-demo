import React from 'react';
import ScreenWrapper from '../../ScreenWrapper';
import Actions from './Actions';
import useSelector from '../../hooks/useSelector';
import { getTodoList } from '../../store/todo/selectors';
import { Badge, Subheader } from 'react-native-material-ui';
import Item from './Item';
import { ScrollView, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  badgeContainer: {
    paddingLeft: 50,
    paddingTop: 8
  },
});

const ToDo = () => {
  const todoList = useSelector(getTodoList);

  return (
    <ScreenWrapper>
      <View style={styles.badgeContainer}>
        <Badge
          size={22}
          text={String(todoList.length)}
          style={{ container: { bottom: 15, left: -21 } }}
        >
          <Subheader text='To Do List'/>
        </Badge>
      </View>
      <ScrollView>
        {!!todoList.length && todoList.map(item => <Item key={item.id} {...item} />)}
      </ScrollView>
      <Actions />
    </ScreenWrapper>
  )
}

export default ToDo;
