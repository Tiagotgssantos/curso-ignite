export function Post(){
    return <p>Post</p>
}

/*Primeira forma de exportação:
    function Post(){
    return <p>Post</p>
    }

    so adicionar o export na função.

    export function Post(){
    return <p>Post</p>

    e no aquivo que vai receber a importação:

    import {Post} from './Post';
}

}

*/

/*
segunda forma de exportação
    export default Post
Desta forma o nome pode ser mudado 
no aquivo que foi exportado 

e no arquivo App.jsx
    import Post from './Post';
    o ./ informa que esta na mesta pasta
*/
