function LoadingSpinner({ message }) {
  return (
    <p style={{ textAlign: 'center', padding: '20px' }}>
      {message || 'Loading...'}
    </p>
  );
}

export default LoadingSpinner;