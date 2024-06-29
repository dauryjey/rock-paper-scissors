interface HeaderScoreLayoutProps {
		children: React.ReactNode
}

export const HeaderScoreLayout = ({ children }: HeaderScoreLayoutProps) => {
  return (
    <div className="flex justify-between gap-8 border-4 rounded-lg border-[var(--header-outline)] px-4 py-2">
      {children}
    </div>
  )
}
