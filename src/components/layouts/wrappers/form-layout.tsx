interface FormLayoutProps {
  children: React.ReactNode
}

export const FormLayout = ({ children }: FormLayoutProps) => (
  <div className="w-full h-screen flex flex-col bg-surface-background">
    {children}
  </div>
)

export default FormLayout
