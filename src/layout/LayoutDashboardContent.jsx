export default function LayoutDashboardContent({
  className,
  children, 
  ...props
}) {
  return (
    <>
      <div className={`${className} container mx-auto h-screen p-24`} {...props}>
        {children}
      </div>
    </>
  );
}
