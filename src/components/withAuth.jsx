const withAuth = (TakeCompoent) => {
    // take original component
  const ReturnNewComponent = (props) => {

    const user={
        role:'admin'
    }


    // fetch user api if founded show dashboard or not 
    // we can show dashboard based on user 


   


    if (user.role!=='admin') {
      return <h1>Not Found</h1>; 
    }

    return <TakeCompoent {...props} role="admin" />;

    
  };

  return ReturnNewComponent;
};

export default withAuth;
