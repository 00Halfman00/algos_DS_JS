
/*
  1.  CREATE A FUNCTION NAMED callInner
      A.  IT TAKE AN ARGUMENT AS ITS PARAMETER
          ( DEPENDING ON WHAT YOUR DOING IT CAN BE SET UP WITH ONE OR SEVERAL
           PARAMETERS )
      B.  IT WILL DEFINE A FUNCTION WRAPPED IN PARENTHESIS AND FOLLOWED BY A
          PARENTHESIS
*/




const callInner = (name) => {
  // const call = (print = (n) => console.log(name))();
  // call;

  /////////////////////// an anonymous self-calling function ///////////
  (print = (n) => console.log(name))();
};

callInner('Bob Flores');
