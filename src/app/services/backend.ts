export const updateTodo = async (todoId: string, updatedData: { title: string }) => {
    console.log(`Updating todo ${todoId} with data`, updatedData);
    return { success: true, data: updatedData };
  };