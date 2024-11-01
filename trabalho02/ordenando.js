// a) Função swap - troca os valores de duas posições de um vetor
const swap = (array, i, j) => {
    [array[i], array[j]] = [array[j], array[i]];
  };
  
  // b) Função shuffle - embaralha os elementos de um vetor com uma quantidade de trocas
  const shuffle = (array, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
      const idx1 = Math.floor(Math.random() * array.length);
      const idx2 = Math.floor(Math.random() * array.length);
      swap(array, idx1, idx2);
    }
  };
  
  // c) Função bubble_sort - ordena um vetor de inteiros com o algoritmo Bubble Sort
  const bubble_sort = (array) => {
    let n = array.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 1; i < n; i++) {
        if (array[i - 1] > array[i]) {
          swap(array, i - 1, i);
          swapped = true;
        }
      }
      n--;
    } while (swapped);
  };
  
  // d) Função selection_sort - ordena um vetor de inteiros com o algoritmo Selection Sort
  const selection_sort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIdx]) {
          minIdx = j;
        }
      }
      if (minIdx !== i) swap(array, i, minIdx);
    }
  };
  
  // e) Função quick_sort - ordena um vetor de inteiros com o algoritmo Quick Sort
  const quick_sort = (array, start = 0, end = array.length - 1) => {
    if (start < end) {
      const pivotIndex = particionamento(array, start, end);
      quick_sort(array, start, pivotIndex - 1);
      quick_sort(array, pivotIndex + 1, end);
    }
  };
  
  // f) Função particionamento - função de apoio para o quick_sort
  const particionamento = (array, start, end) => {
    const pivot = array[end];
    let i = start - 1;
    for (let j = start; j < end; j++) {
      if (array[j] < pivot) {
        i++;
        swap(array, i, j);
      }
    }
    swap(array, i + 1, end);
    return i + 1;
  };
  // Adicionando um comentário
