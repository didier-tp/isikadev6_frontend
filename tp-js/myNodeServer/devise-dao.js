class DeviseDao {

    constructor(){}

    getDeviseByCode(pcode) /* : Promise<Devise> */
    {
        return new Promise(
          (resolve,reject) => {
              //V1 (simulation sans mongo DB)
              setTimeout( () => { 
                          let devise = { code : pcode , 
                                        nom : 'devise_' + pcode , 
                                        change : Math.random() }
                          resolve(devise);
                          } ,300);
          }  
        );
    }

    //...
}

const deviseDao = new DeviseDao();

exports.deviseDao=deviseDao;