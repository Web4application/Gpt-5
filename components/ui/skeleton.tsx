import { Skeleton } from "@/components/ui/skeleton"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="<Skeleton className="h-[20px] w-[100px] rounded-full" />"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
