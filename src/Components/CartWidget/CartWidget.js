import React, { useContext } from 'react'
import CartContext from '../../Context/CartContext'


function CartWidget({ onAdd }) {

    const { cart } = useContext(CartContext)

    const styles = {
        items: {
          background: '#4297ad',
          padding: '3px',
          fontSize: '12px',
          borderRadius: '5px',
          color:'white',
          border: '1px solid black'
        },
        widget: {
            color: 'black'
        }
      };

      let cantidades = 0

 

   


    return (
        <div>
            <i className="fas fa-shopping-bag" style={styles.widget}>
                {
                    
                        cart.map(({ cantidad }) =>{
                            
                            console.log(cantidad)
                            cantidades += cantidad

                          
                        })
                   
                }

                
                <small style={styles.items}>{cantidades}</small>
                
            </i>
        </div>
    )

   
}

export default CartWidget


/****
 * {
                    (cantidades >= 1)
                    ?<small style={styles.items}>{cantidades}</small>  
                    : <small></small>

                      
                }
 */