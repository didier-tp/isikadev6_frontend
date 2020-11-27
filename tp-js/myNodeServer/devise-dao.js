var myGenericMongoClient = require('./my_generic_mongo_client');

function replace_mongoId_byCode(devise){
	devise.code = devise._id;
	delete devise._id; 
	return devise;
}

class DeviseDao {

    constructor(){}

    getDeviseByCode(pcode) /* : Promise<Devise> */
    {
        return new Promise(
          (resolve,reject) => {
              /*
              //V1 (simulation sans mongo DB)
              setTimeout( () => { 
                          let devise = { code : pcode , 
                                        nom : 'devise_' + pcode , 
                                        change : Math.random() }
                          resolve(devise);
                          } ,300);
              */
             //V2 avec mongoDB:
             myGenericMongoClient.genericFindOne('devises',
										{ '_id' : pcode },
									    function(err,devise){
											if(devise==null)
											   reject('not found');
											else
										       resolve(replace_mongoId_byCode(devise));
									   });
          }  
        );
    }

    //...
}

const deviseDao = new DeviseDao();

exports.deviseDao=deviseDao;