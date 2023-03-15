/**
 * App bootstrap gate
 * Get user details from server and decide
 * which section need to show
 * @format
 */

 import React, {useEffect} from 'react';
 import {useDispatch, useSelector} from 'react-redux';
 
 import {selectIsAppReady} from '../selectors';
 import {bootstrapApp} from '../slice';
 
 //-----------( Types )-----------
 type Props = {
   restored: boolean,
   children: React.ReactNode,
 };
 //-------------------------------
 
 const AppBootstrapGate = ({restored, children}: Props) => {
   const dispatch = useDispatch();
   const isAppReady = useSelector(selectIsAppReady);
 
   useEffect(() => {
     restored && dispatch(bootstrapApp());
   }, [dispatch, restored]);
 
   if (isAppReady) {
     return children;
   }
 
   return null;
 };
 
 export default AppBootstrapGate;
 