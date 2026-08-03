import { cn } from "@/utilities/ui";
import { Separator } from "@/components/ui/separator";
import type * as React from "react";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
	orientation?: "horizontal" | "vertical";
	label?: React.ReactNode;
}

export function Divider({
	className,
	orientation = "horizontal",
	label,
	...props
}: DividerProps) {
	if (label) {
		return (
			<div
				data-slot="divider"
				className={cn("flex items-center gap-3", className)}
				{...props}
			>
				<Separator orientation={orientation} className="flex-1" />
				<span className="shrink-0 text-xs text-muted-foreground">{label}</span>
				<Separator orientation={orientation} className="flex-1" />
			</div>
		);
	}

	return (
		<Separator
			data-slot="divider"
			orientation={orientation}
			className={className}
			{...props}
		/>
	);
}
