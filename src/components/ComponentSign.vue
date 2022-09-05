<template>
   <div class="container">
        <div class="content">
         
         <div class="carnet">
             <h2>Inscription</h2>
             <form >
          
                 <div class="form-content">
                     <label for="">Nom</label>
                     <input type="text" v-model="nom" >
                 </div>
                  <div class="form-content">
                     <label for="">Prenom</label>
                     <input type="text" name="prenom"  v-model="prenom">
                 </div>
                  <div class="form-content">
                     <label for="">Adresse Email</label>
                     <input type="text" name="email" v-model="email" >
                 </div>
                  <div class="form-content">
                     <label for="">Numero</label>
                     <input type="text" name="numero" v-model="numero" >
                 </div>
                  <div class="form-content">
                     <label for="">Mot de passe</label>
                     <input type="password"  name="password" v-model="password" >
                 </div>
                
                 <button  @click.prevent="submit">Enregister</button>
                
             </form>
          
          
        
         </div>
        </div>
     </div>
</template>

<script>
    import {data} from '../firebase'
    import { getFirestore, collection, addDoc } from 'firebase/firestore'
export default {
    name:"ComponentLogin",
    data() {
        return {
            nom:"",
            prenom:"",
            email:"",
            numero:"",
            password:""
        }
    },
    methods:{
       async submit(){
            let DataUser ={
                nom:this.nom,
                prenom:this.prenom,
                email:this.email,
                numero:this.numero,
                password:this.password
            }
            console.log("sqqf",data);


            const citiesCol = collection(data, 'users');
           const citySnapshot = await addDoc(citiesCol,DataUser);
        //    const cityList = citySnapshot.docs.map(doc => doc.data());
          console.log(citySnapshot);

        }
    }


}
</script>

<style scoped lang="css">
    .container {
  background-color: #f5f5f5;
 display: flex;
 flex-direction: column;
 /* justify-content: center; */
 align-items: center;
 
 width: 100%;
 height: calc(100vh - 60px);
 padding: 10px;
}

.content {
 width: 80%;
 height: 100%;
 /* border: 1px solid black; */
 padding: 10px;
 display: flex;
 flex-direction: column;
 background-color: #fff;
 border-radius: 8px;
}




.carnet {
 border: solid 1px #6c7af6;
 height: 100%;
 display: flex;
 flex-direction: column;
 justify-content: space-around;
 align-items: center;
 margin-top: 20px;
 border-bottom-left-radius: 10px;
 border-bottom-right-radius: 10px;
}
h3{
 font-size: 25px;
 padding: 15px 0;
}
form{
 border: 1px solid #d8d8d8;
 display: flex;
 flex-direction: column;
 padding: 10px;
 max-width: 466px;
 width: 98%;
 align-items: center;
 height: 68vh;
 justify-content: center;
 border-radius: 8px;
  box-shadow: 0 1px 5px rgb(0 0 0 / 20%);
}


.form-content  {
 /* border: 1px solid blue; */
 display: flex;
 flex-direction: column;
 margin-bottom: 15px;
 width: 100%;
 align-items: center;
}
label{
 font-size: 18px;
}
input{
 max-width: 400px;
 width: 98%;
 height: 2.5rem;
 border-radius: 8px;
 /* outline: none; */
 padding: 8px;
 font-size: 18px;
 border: 1px solid;
}

button {
 width: 9rem;
 height: 3rem;
 margin-top: 25px;
 text-align: center;
 border: none;
 background-color: rgb(15, 142, 240);
 color: white;
 border-radius: 5px;
 font-size: 23px;
  font-family: 'Kaushan Script', cursive;
}

button:hover {
 background-color: white;
 color: rgb(15, 142, 240);
 border: 1px solid rgb(15, 142, 240);
 cursor: pointer;
}

@media (max-width: 940px) {
 .content {
     width: 70%;
 }

 .carnet .text {
     font-size: 30px;
 }

}

@media (max-width: 700px) {
 .content {
     width: 100%;
     flex-direction: row;
 }

 .header ul {
     flex-direction: column;
     justify-content: center;
 }

 .carnet {
     width: 100%;
     height: auto;
     margin-top: 0;
     justify-content: center;
 }



}

@media (max-width: 378px) {

 .carnet .text {
     font-size: 10px;
 }

}

</style>