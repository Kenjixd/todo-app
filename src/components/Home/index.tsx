import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Tasks } from '../Tasks';
import { EmptyList } from '../Tasks/EmptyList';
import { styles } from './style';
import { ITask } from './interface';

export function Home() {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [newTask, setNewTask] = useState('');

    function handleAddTask() {
        if (newTask.trim() === '') {
            return Alert.alert('Erro', 'A tarefa não pode estar vazia');
        }
        if (tasks.filter(task => task.name === newTask).length === 1) {
            return Alert.alert('Erro', 'Já existe uma tarefa cadastrada');
        }

        const newTaskObject = {
            name: newTask,
            isChecked: false,
        };
        setTasks([...tasks, newTaskObject]);
        setNewTask('');
    }

    function handleRemoveTask(name: string) {
        Alert.alert(
            'Remover tarefa',
            'Tem certeza que deseja remover esta tarefa?',
            [
                {
                    text: 'Não',
                    style: 'cancel',
                },
                {
                    text: 'Sim',
                    onPress: () => setTasks(tasks.filter(task => task.name !== name)),
                },
            ]
        );
    }

    function handleCheckedTask(name: string) {
        setTasks(tasks.map(task => task.name === name ? { ...task, isChecked: !task.isChecked } : task));
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Adicione uma nova tarefa'
                    placeholderTextColor="#808080"
                    value={newTask}
                    onChangeText={setNewTask}
                />

                <TouchableOpacity style={styles.button} onPress={handleAddTask}>
                    <Icon name="add" size={16} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.containerTaskText}>
                <View style={styles.taskText}>
                    <Text style={styles.taskCreated}>Criadas</Text>
                    <Text style={styles.number}>{tasks.length}</Text>
                </View>

                <View style={styles.taskText}>
                    <Text style={styles.taskConcluded}>Concluídas</Text>
                    <Text style={styles.number}>{tasks.filter(task => task.isChecked).length}</Text>
                </View>
            </View>
            <View style={styles.taskList}>
                <FlatList
                    data={tasks}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => (
                        <Tasks
                            task={item.name}
                            isChecked={item.isChecked}
                            onRemove={() => handleRemoveTask(item.name)}
                            onCheck={() => handleCheckedTask(item.name)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <EmptyList />
                    )}
                />
            </View>
        </View>
    );
}
