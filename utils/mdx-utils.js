import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {
    const { data } = await api.get(`/posts?id=eq.${id}`);

    //TODO: BUSCAR UM POST EM ESPECIFICO.
    //const {data} = await api.get(`/post?id=eq.${id}`)

    return data[0];
};

export const postUserPost = (obj) => {
    api
      .post('/posts', obj)
      .then(function (response) {
        alert('Post enviado com sucesso!');
      })
      .catch(function (error) {
        alert('Houve uma falha ao enviar o post.');
      });
  };